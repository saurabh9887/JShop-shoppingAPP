import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Profile = ({ open, onOpenChange }) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
            <DialogDescription>
              Please provide required information for greater user experience.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="pb-1">
            <Field>
              <FieldLabel htmlFor="filename">Full Name</FieldLabel>
              <Input
                id="filename"
                name="filename"
                placeholder="Full Name"
                maxLength={90}
                required
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="pb-1">
            <Field>
              <FieldLabel htmlFor="filename">Email</FieldLabel>
              <Input
                id="filename"
                name="filename"
                placeholder="Email"
                maxLength={90}
                required
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="pb-1">
            <Field>
              <FieldLabel htmlFor="filename">Phone Number</FieldLabel>
              <Input
                id="filename"
                name="filename"
                placeholder="Phone Number"
                maxLength={10}
                required
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="pb-1">
            <Field>
              <FieldLabel htmlFor="filename">Password</FieldLabel>
              <Input
                id="filename"
                name="filename"
                placeholder="Password"
                maxLength={90}
                type="password"
                required
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
