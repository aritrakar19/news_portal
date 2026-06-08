import { UploadCloud, Image as ImageIcon, Video, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState } from "react"

interface FileUploadZoneProps {
  label: string
  accept: string
  icon: "image" | "video"
  multiple?: boolean
}

export function FileUploadZone({ label, accept, icon, multiple = false }: FileUploadZoneProps) {
  const { t } = useTranslation()
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files)
      setFiles(multiple ? [...files, ...droppedFiles] : [droppedFiles[0]])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(multiple ? [...files, ...selectedFiles] : [selectedFiles[0]])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_: File, i: number) => i !== index))
  }

  const Icon = icon === "image" ? ImageIcon : Video

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">{label}</label>
      
      {(!files.length || multiple) && (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer
            ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-900/50"}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
        >
          <input
            id={`file-upload-${label}`}
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={handleFileSelect}
          />
          <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <UploadCloud className="w-6 h-6 text-slate-500" />
          </div>
          <p className="text-sm font-medium text-foreground mb-1">
            {t("upload.file.clickOrDrag", "Click or drag and drop to upload")}
          </p>
          <p className="text-xs text-muted-foreground">
            {accept.includes("image") ? t("upload.file.imageLimit", "PNG, JPG up to 10MB") : t("upload.file.videoLimit", "MP4, WebM up to 100MB")}
          </p>
        </div>
      )}

      {files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {files.map((file: File, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 border border-border rounded-lg">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-slate-500" />
                </div>
                <div className="truncate">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                className="text-slate-400 hover:text-destructive transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
