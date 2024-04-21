import { createDiaryAction } from '@/actions/createDiaryAction'
import React from 'react'

const CreateDiaryForm = (): React.ReactElement => {
  
  return (
    <form action={createDiaryAction} className="flex flex-col gap-4 max-w-xl mx-auto">
    <textarea
      className="border-primary h-52 p-4 text-lg border textarea"
      placeholder="isi diary kamu...."
      name='content'
    >
     
    </textarea>
    <button className="btn btn-primary " type="submit">
      Create Now
    </button>
  </form>
  )
}

export default CreateDiaryForm