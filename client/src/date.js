export default function getDate(date) {
  // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const dayOfWeek = date.getDay()

  // Get the day of the month (1 - 31)
  const dayOfMonth = date.getDate()

  // Get the month (0: January, 1: February, ..., 11: December)
  const month = date.getMonth()

  // Get the year (e.g., 2023)
  const year = date.getFullYear()

  // Get the hours (0 - 23)
  const hours = date.getHours()

  // Get the minutes (0 - 59)
  const minutes = date.getMinutes()

  function getDayName(dayOfWeek) {
    let dayName

    switch (dayOfWeek) {
      case 0:
        return (dayName = 'Nedeľa')
        break
      case 1:
        return (dayName = 'Pondelok')
        break
      case 2:
        return (dayName = 'Utorok')
        break
      case 3:
        return (dayName = 'Streda')
        break
      case 4:
        return (dayName = 'Štvrtok')
        break
      case 5:
        return (dayName = 'Piatok')
        break
      case 6:
        return (dayName = 'Sobota')
        break
      default:
        return (dayName = 'Invalid day')
    }
  }

  function getMonthName(month) {
    let monthName

    switch (month) {
      case 0:
        return (monthName = 'Január')
        break
      case 1:
        return (monthName = 'Február')
        break
      case 2:
        return (monthName = 'Marec')
        break
      case 3:
        return (monthName = 'Apríl')
        break
      case 4:
        return (monthName = 'Máj')
        break
      case 5:
        return (monthName = 'Jún')
        break
      case 6:
        return (monthName = 'Júl')
        break
      case 7:
        return (monthName = 'August')
        break
      case 8:
        return (monthName = 'September')
        break
      case 9:
        return (monthName = 'Október')
        break
      case 10:
        return (monthName = 'November')
        break

      case 11:
        return (monthName = 'December')
        break

      default:
        return (dayName = 'Invalid day')
    }
  }

  let dayName = getDayName(dayOfWeek)
  let monthName = getMonthName(month)

  return { dayOfMonth, dayName, monthName, year }
}

// const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false)
// const initClient = () => {
//   setIsLoadingGoogleDriveApi(true)
//   gapi.client
//     .init({
//       apiKey: import.meta.env.VITE_GOOGLE_DRIVE_API_KEY,
//       clientId: import.meta.env.VITE_GOOGLE_DRIVE_CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES,
//     })
//     .then(
//       function () {
//         const updateSigninStatus = (isSignedIn) => {
//           if (isSignedIn) {
//             // Set the signed in user
//             setSignedInUser(gapi.auth2.getAuthInstance().currentUser.je.Qt)
//             setIsLoadingGoogleDriveApi(false)
//             // list files if user is authenticated
//             listFiles()
//           } else {
//             // prompt user to sign in
//             handleAuthClick()
//           }
//         }

//         /**
//          * List files.
//          */
//         const listFiles = (searchTerm = null) => {
//           setIsFetchingGoogleDriveFiles(true)
//           gapi.client.drive.files
//             .list({
//               pageSize: 10,
//               fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
//               q: searchTerm,
//             })
//             .then(function (response) {
//               setIsFetchingGoogleDriveFiles(false)
//               setListDocumentsVisibility(true)
//               const res = JSON.parse(response.body)
//               setDocuments(res.files)
//             })
//         }

//         /**
//          *  Sign in the user upon button click.
//          */
//         const handleAuthClick = (event) => {
//           gapi.auth2.getAuthInstance().signIn()
//         }
//         // Listen for sign-in state changes.
//         gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

//         // Handle the initial sign-in state.
//         updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
//       },
//       function (error) {}
//     )
// }

// // Array of API discovery doc URLs for APIs
// const DISCOVERY_DOCS = [
//   'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
// ]

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// //const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'
// const SCOPES = 'https://www.googleapis.com/auth/drive.appdata'

// const handleClientLoad = () => {
//   gapi.load('client:auth2', initClient)
// }
// ;<button onClick={() => handleClientLoad()}>Load Client</button>
