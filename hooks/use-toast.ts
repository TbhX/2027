"use client";

import { toast } from "sonner";

export function useToast() {
  return {
    toast: (props: { title: string; description: string }) => {
      toast(props.title, {
        description: props.description,
      });
    },
  };
}