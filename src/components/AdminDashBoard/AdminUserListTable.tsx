import React from "react";
import { Table } from "react-bootstrap";
import SampleData from "../Data/SampleData";

interface User {
  personId: String;
  firstName: String;
  teamName: String;
  dateOfBirth: Date;
}
interface UserData {
  headings: String[];
  users: User[];
}

export default function AdminUserListTable(props: UserData) {

  const { headings, users } = props;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.personId}</td>
              <td>{user.firstName}</td>
              <td>{user.teamName}</td>
              <td>{user.dateOfBirth.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
