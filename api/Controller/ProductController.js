import Product from "../Model/ProductModel.js";

// Add or Update Product
export const addOrUpdateProduct = async (req, res) => {
  try {
    const {
      productKeyID,
      discount,
      tags,
      name,
      originalPrice,
      discountedPrice,
      inStock,
      size,
      counter,
      categories,
      images,
      avgRating,
      description,
    } = req.body;

    // If productKeyID is supplied → update product
    if (productKeyID) {
      const updatedProduct = await Product.findOneAndUpdate(
        { productKeyID },
        {
          discount,
          tags,
          name,
          originalPrice,
          discountedPrice,
          inStock,
          size,
          counter,
          categories,
          images,
          avgRating,
          description,
        },
        { new: true } // return updated doc
      );

      if (!updatedProduct)
        return res
          .status(404)
          .json({ message: "Product not found with this productKeyID" });

      return res.status(200).json({
        message: "Product updated successfully",
        data: productKeyID,
      });
    }

    // Else → Add new product
    const newProduct = new Product({
      discount,
      tags,
      name,
      originalPrice,
      discountedPrice,
      inStock,
      size,
      counter,
      categories,
      images,
      avgRating,
      description,
    });

    // Save product
    await newProduct.save();

    // Assign productKeyID if you want to use _id as key
    newProduct.productKeyID = newProduct._id;

    // Save again only if productKeyID field is separate in schema
    await newProduct.save();

    return res.status(201).json({
      message: "Product added successfully",
      data: newProduct.productKeyID,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

// Get All Products
export const getAllProductsWeb = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // newest first

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found", data: [] });
    }

    return res.status(200).json({
      message: "Products fetched successfully",
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const {
      search, // optional text search
      startDate, // optional from date
      endDate, // optional to date
      page = 1, // default pagination page
      limit = 10, // default per-page count
      sort = "-createdAt", // default: newest first
    } = req.body;

    // 🔍 Build filter conditions dynamically
    const query = {};

    // Text search (name, category, tags, description)
    if (search) {
      const regex = new RegExp(search, "i");
      query.$or = [
        { name: regex },
        { categories: regex },
        { tags: regex },
        { description: regex },
      ];
    }

    // 🗓️ Date range filter (createdAt)
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    // ⚡ Pagination setup
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Total product count before pagination
    const totalCount = await Product.countDocuments(query);

    // Fetch filtered + paginated data
    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    // ✅ Standard response
    return res.status(200).json({
      statusCode: 200,
      errorMessage: null,
      message: "Products fetched successfully",
      totalCount,
      responseData: {
        data: products,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      errorMessage: error.message,
      message: "Server error while fetching products",
      totalCount: 0,
      responseData: { data: [] },
    });
  }
};

export const getProductByKeyID = async (req, res) => {
  try {
    const { productKeyID } = req.query;

    if (!productKeyID) {
      return res.status(400).json({
        statusCode: 400,
        errorMessage: "productKeyID is required",
        message: "Bad Request",
        totalCount: 0,
        responseData: { data: [] },
      });
    }

    // Fetch the product
    const product = await Product.findOne({ productKeyID });

    if (!product) {
      return res.status(404).json({
        statusCode: 404,
        errorMessage: "No product found with this productKeyID",
        message: "Product not found",
        totalCount: 0,
        responseData: { data: [] },
      });
    }

    // ✅ Standard response format
    return res.status(200).json({
      statusCode: 200,
      errorMessage: null,
      message: "Product fetched successfully",
      totalCount: 1,
      responseData: {
        data: [product],
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      errorMessage: error.message,
      message: "Server error while fetching product",
      totalCount: 0,
      responseData: { data: [] },
    });
  }
};

export const getProductByKeyIDWeb = async (req, res) => {
  try {
    const { productKeyID } = req.query;

    if (!productKeyID) {
      return res.status(400).json({
        statusCode: 400,
        errorMessage: "productKeyID is required",
        message: "Bad Request",
        totalCount: 0,
        responseData: { data: [] },
      });
    }

    // Fetch the product
    const product = await Product.findOne({ productKeyID });

    if (!product) {
      return res.status(404).json({
        statusCode: 404,
        errorMessage: "No product found with this productKeyID",
        message: "Product not found",
        totalCount: 0,
        responseData: { data: [] },
      });
    }

    // ✅ Standard response format
    return res.status(200).json({
      statusCode: 200,
      errorMessage: null,
      message: "Product fetched successfully",
      totalCount: 1,
      responseData: {
        data: [product],
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      errorMessage: error.message,
      message: "Server error while fetching product",
      totalCount: 0,
      responseData: { data: [] },
    });
  }
};
