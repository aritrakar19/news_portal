import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Eye, Edit, ShieldAlert, ShieldCheck, UserX, Trash2, Search, Filter } from "lucide-react"
import { mockSystemUsers, type SystemUser } from "../data/mockUsers"

interface UsersTableProps {
  onViewUser: (user: SystemUser) => void
}

export function UsersTable({ onViewUser }: UsersTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">Active</Badge>
      case "Pending": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">Pending</Badge>
      case "Suspended": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">Suspended</Badge>
      case "Blocked": return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400">Blocked</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Super Admin": return <Badge variant="outline" className="border-rose-500 text-rose-600 dark:text-rose-400">Super Admin</Badge>
      case "Admin": return <Badge variant="outline" className="border-purple-500 text-purple-600 dark:text-purple-400">Admin</Badge>
      case "Editor": return <Badge variant="outline" className="border-amber-500 text-amber-600 dark:text-amber-400">Editor</Badge>
      case "Reporter": return <Badge variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400">Reporter</Badge>
      case "Viewer": return <Badge variant="outline" className="border-slate-500 text-slate-600 dark:text-slate-400">Viewer</Badge>
      default: return <Badge variant="outline">{role}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users by name, email, or mobile..." className="pl-9" />
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <Select defaultValue="all-roles">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-roles">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="reporter">Reporter</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead>User Profile</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSystemUsers.map((user) => (
              <TableRow key={user.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => onViewUser(user)}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatar} alt={user.fullName} />
                      <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{user.fullName}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-0.5">{user.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{user.email}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{user.mobile}</div>
                </TableCell>
                <TableCell>
                  {getRoleBadge(user.role)}
                </TableCell>
                <TableCell>
                  <div className="text-sm">{user.district}</div>
                  <div className="text-xs text-muted-foreground">{user.state}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{new Date(user.lastLogin).toLocaleDateString()}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(user.lastLogin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </TableCell>
                <TableCell>
                  {getStatusBadge(user.status)}
                </TableCell>
                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[180px]">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => onViewUser(user)}>
                        <Eye className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      
                      {user.status !== "Active" && (
                        <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck className="mr-2 h-4 w-4" /> Activate Account
                        </DropdownMenuItem>
                      )}
                      
                      {user.status === "Active" && (
                        <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                          <ShieldAlert className="mr-2 h-4 w-4" /> Suspend Account
                        </DropdownMenuItem>
                      )}
                      
                      <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                        <UserX className="mr-2 h-4 w-4" /> Block User
                      </DropdownMenuItem>
                      
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete Account
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
