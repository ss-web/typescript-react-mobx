import { observer } from 'mobx-react-lite'
import modalService from 'store/modalService'
import usersService from 'store/usersService'
import CloseIcon from './CloseIcon'
import { CloseTable, CopySection, TableConatiner, TableLink, Button } from './CommonElements'
import { json2csv } from 'json-2-csv'


const TableBlock = observer(() => {
  const users = usersService.users
  const json2csvCallback = () => {
    json2csv(users, (err, csv) => {
      if (err || !csv) {
        throw err
      }

      const file = new Blob([csv], {type : 'text/csv'})
      downloadBlob(file, 'users.csv')
    })
  }

  const downloadBlob = (blob, name) => {
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")

    link.href = blobUrl
    link.download = name

    document.body.appendChild(link)

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    )

    document.body.removeChild(link)
  }

  return (<>
    {!!users.length && (
      <TableConatiner>
        <CopySection>
          <Button onClick={() => json2csvCallback()} small>Copy table</Button>
          <CloseTable onClick={() => usersService.deleteAllUsers()}>
            <CloseIcon />
          </CloseTable>
        </CopySection>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.surname}</td>
                <td>{u.age}</td>
                <td>{u.city}</td>
                <td>
                  <TableLink onClick={() => modalService.openModal(u.id)}>Edit</TableLink>
                  <TableLink onClick={() => usersService.deleteUser(u.id)} red>Delete</TableLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableConatiner>
    )}
  </>);
})

export default TableBlock;