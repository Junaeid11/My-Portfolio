"use client";

import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { createSkill } from "@/service/skills";

import NMImageUploader from "@/components/shared/NMImageUploader";
import ImagePreviewer from "@/components/shared/NMImageUploader/ImagePreviewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CreateSkill = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [charCount, setCharCount] = useState(0);

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (imageFiles[0]) formData.append("icon", imageFiles[0]);

      const res = await createSkill(formData);
      if (res?.success) {
        toast.success(res?.message);
        form.reset();
        setImageFiles([]);
        setImagePreview([]);
        setCharCount(0);
      } else {
        toast.error(res?.message);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white dark:bg-gray-900 ">
      <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-white mb-4">
        Create a New Skill
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Skill Name Input */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setCharCount(e.target.value.length);
                        field.onChange(e);
                      }}
                      className="pr-10"
                    />
                    <span className="absolute right-2 top-2 text-gray-500 text-sm">
                      {charCount}/50
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload / Preview */}
          <div className="flex flex-col items-center">
            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                className="mt-4"
              />
            ) : (
              <div className="mt-4">
                <NMImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload Skill Icon"
                />
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-400 mt-5 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Skill"}
          </Button>
        </form>
      </Form>

      <Toaster richColors />
    </div>
  );
};

export default CreateSkill;
