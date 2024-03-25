import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}
const UserDetailPage = ({ params: { id }}: Props) => {
  console.log("id:" + id);
  if (id > 10) notFound();

  return (
    <div>
      UserDetailsPage {id}
    </div>
  )
}

export default UserDetailPage
