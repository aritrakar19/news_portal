import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter, SlidersHorizontal } from "lucide-react"

export function NewsFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search headlines, reporter names, or IDs..."
          className="pl-9 bg-background"
        />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Statuses</SelectItem>
            <SelectItem value="pending">Pending Review</SelectItem>
            <SelectItem value="under-review">Under Review</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-category">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-category">All Categories</SelectItem>
            <SelectItem value="politics">Politics</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="tech">Tech</SelectItem>
            <SelectItem value="breaking">Breaking</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-background hidden sm:flex">
          <SlidersHorizontal className="mr-2 h-4 w-4" /> Date Range
        </Button>

        <Button variant="outline" className="bg-background">
          <Filter className="mr-2 h-4 w-4" /> More
        </Button>
      </div>
    </div>
  )
}
