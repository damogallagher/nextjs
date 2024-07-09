import React from 'react'
interface Props {
    params: { id: number; photoId: number; }
}
const PhotoDetailPage = ({ params: {id, photoId}}: Props) => {
  return (
    <div>
      PhotoDetailPage: id: {id} PhotoId: {photoId}
    </div>
  )
}

export default PhotoDetailPage
