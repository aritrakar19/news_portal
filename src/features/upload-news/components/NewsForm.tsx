import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { newsSchema, type NewsFormValues } from "../schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FileUploadZone } from "./FileUploadZone"
import { Bold, Italic, Link2, List, Type } from "lucide-react"

export function NewsForm() {
  const form = useForm<NewsFormValues>({
    resolver: zodResolver(newsSchema) as any,
    defaultValues: {
      headline: "",
      summary: "",
      content: "",
      category: "",
      state: "",
      district: "",
      location: "",
      isBreaking: false,
      tags: "",
    },
  })

  function onSubmit(data: NewsFormValues) {
    console.log("Submitted:", data)
    // Here we would typically send the data to an API
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold border-b border-border pb-2">Basic Information</h3>
            
            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base">Headline <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., City Council Approves New Budget for Education" className="h-12 text-lg font-medium" {...field} />
                  </FormControl>
                  <FormDescription>Make it catchy but truthful. Min 10, max 120 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Short Summary <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Textarea placeholder="A brief 2-3 sentence overview of the news..." className="resize-none h-24" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Full News Description <span className="text-destructive">*</span></FormLabel>
                  <div className="border border-border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring">
                    {/* Mock Rich Text Toolbar */}
                    <div className="bg-slate-50 dark:bg-slate-900 border-b border-border p-2 flex items-center gap-1">
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0"><Bold className="h-4 w-4" /></Button>
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0"><Italic className="h-4 w-4" /></Button>
                      <div className="w-px h-4 bg-border mx-1" />
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0"><List className="h-4 w-4" /></Button>
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0"><Link2 className="h-4 w-4" /></Button>
                      <div className="w-px h-4 bg-border mx-1" />
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0"><Type className="h-4 w-4" /></Button>
                    </div>
                    <FormControl>
                      <Textarea 
                        placeholder="Write the full story here..." 
                        className="resize-y min-h-[300px] border-0 focus-visible:ring-0 rounded-none bg-transparent" 
                        {...field} 
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold border-b border-border pb-2 pt-4">Classification & Location</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category <span className="text-destructive">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="politics">Politics</SelectItem>
                        <SelectItem value="crime">Crime</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (Comma separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. elections, city council, budget" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State <span className="text-destructive">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>District <span className="text-destructive">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select District" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="nagpur">Nagpur</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Location <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Andheri West" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="isBreaking"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border border-border p-4 shadow-sm bg-slate-50 dark:bg-slate-900/50">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base font-bold text-destructive">
                      Breaking News
                    </FormLabel>
                    <FormDescription>
                      Mark this story as urgent breaking news. Requires editor approval.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold border-b border-border pb-2 pt-4">Media Attachments</h3>
            
            <FileUploadZone label="Featured Image (Primary)" accept="image/*" icon="image" />
            <FileUploadZone label="Additional Images (Optional)" accept="image/*" icon="image" multiple />
            <FileUploadZone label="Video Attachment (Optional)" accept="video/*" icon="video" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <Button type="button" variant="outline" className="sm:w-1/3">
              Save as Draft
            </Button>
            <Button type="submit" className="sm:w-2/3 font-bold text-md h-11">
              Submit News for Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
