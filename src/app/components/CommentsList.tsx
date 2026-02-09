"use client"

interface Comment {
  id: string | number
  username: string
  image_url: string
  komen: string
  created_at: string
}

export default function CommentList({ comments }: { comments: Comment[] }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="text-center py-10 border-t border-zinc-800">
        <p className="text-zinc-500 italic">Belum ada pendapat. Jadi yang pertama berkomentar!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 mt-10 border-t border-zinc-800 pt-10">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4 group">
          {/* Avatar User */}
          <div className="flex-shrink-0">
            <img 
              src={comment.image_url} 
              alt={comment.username} 
              className="w-10 h-10 rounded-full border border-zinc-700 object-cover"
            />
          </div>

          {/* Isi Komentar */}
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-100 text-sm">
                {comment.username}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                {/* Menampilkan waktu, misal: 5 menit yang lalu */}
                {new Date(comment.created_at).toLocaleDateString('id-ID')}
              </span>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-2xl rounded-tl-none mt-1">
              <p className="text-zinc-300 text-sm leading-relaxed">
                {comment.komen}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}