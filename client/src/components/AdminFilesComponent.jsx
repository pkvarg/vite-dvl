import React from 'react'
import {
  AiOutlineDelete,
  AiOutlineFile,
  AiOutlineCloudDownload,
} from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const AdminFilesComponent = ({
  showAdminFiles,
  setShowAdminFiles,
  displayOrders,
  currentOrderId,
  getOrders,
}) => {
  const currentOrder = displayOrders.find(
    (order) => order._id === currentOrderId && order
  )

  const deleteFile = async (i, fileName) => {
    if (window.confirm('Si si istý?')) {
      try {
        const index = i

        const { data } = await axios.patch(
          // `http://localhost:7000/api/admin/dvl/files/${currentOrderId}`,

          `https://librosophia.online/api/admin/dvl/files/${currentOrderId}`,
          {
            index,
          }
        )
        deleteFileOnServer(fileName)
        if (data === 'OK') {
          toast.success('Vymazané')
          setShowAdminFiles(false)
        }
        getOrders()
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Nič sa nebude mazať :-)')
    }
  }

  const deleteFileOnServer = async (fileName) => {
    try {
      await axios.delete(
        `https://librosophia.online/api/admin/dvl/files/${fileName}`
      )
      //  `http://localhost:7000/api/admin/dvl/files/${fileName}`
    } catch (error) {
      console.error(error)
      toast.error(error.response.data.error)
    }
  }

  const downloadFileHandler = (fileName) => {
    //url: `http://localhost:7000/api/admin/dvl/files/${fileName}`,

    try {
      axios({
        url: `https://librosophia.online/api/admin/dvl/files/${fileName}`,
        method: 'GET',
        responseType: 'blob', // Important for binary data like files
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      })
    } catch (error) {
      console.log(error)
      toast.error('Súbor nenájdený')
    }
  }

  return (
    showAdminFiles && (
      <div className='files-modal'>
        {currentOrder?.files?.map((file, i) => (
          <div key={file.fileName}>
            <AiOutlineFile className='file-icon' />
            <AiOutlineDelete
              className='delete-file delete'
              onClick={() => deleteFile(i, file.fileName)}
            />
            <AiOutlineCloudDownload
              className='download-file'
              onClick={() => downloadFileHandler(file.fileName)}
            />

            <p className='edit'>{file.fileName}</p>
          </div>
        ))}
        <p className='files-close' onClick={() => setShowAdminFiles(false)}>
          x
        </p>
      </div>
    )
  )
}

export default AdminFilesComponent
