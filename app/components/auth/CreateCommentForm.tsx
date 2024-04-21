import React from 'react'


type ParamsProps = {
  
  diary_id: number
}
const CreateCommentForm = ({diary_id}: ParamsProps) => {

  return (
    <form action={''} className="flex flex-col gap-4  mx-auto w-full">
    <textarea
      className="border-primary h-52 p-4 text-lg border textarea"
      placeholder="tuliskan komentar kamu...."
      name='content'
    >
     
    </textarea>
    <input type="hidden" value={diary_id} name="diary_id" />
    <button className="btn btn-primary " type="submit">
      Comment Now
    </button>
  </form>
  )
}


export default CreateCommentForm