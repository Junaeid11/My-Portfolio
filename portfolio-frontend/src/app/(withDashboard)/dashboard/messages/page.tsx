"use client"

import Spinner from "@/components/shared/Spinner"
import { useGetMessageQuery } from "@/redux/apis/blogs.slice"
import { TMessage } from "@/types/types"

const MessagePage = () => {
  const {data, isLoading} = useGetMessageQuery(undefined)
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div className="p-8">
    <h1 className="text-3xl dark:text-black font-bold mb-4">Messages</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.data.map((message :TMessage) => (
        <div key={message._id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">{message.name}</h3>
          <p className="text-sm text-red-600">{message.email}</p>
          <p className="mt-2 text-gray-800">{message.message}</p>
          <p className="mt-4 text-xs text-gray-500">{new Date(message.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MessagePage
