"use client"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TextareaWithTextProps {
  secondTranslated: string; // Assuming result is a string, adjust the type accordingly
  }
export function TextareaWithText({secondTranslated}: TextareaWithTextProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Result</Label>
      <Textarea placeholder="Type your message here." id="message-2" value={secondTranslated} className="h-96 border-8 border-indigo-300"/>
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}