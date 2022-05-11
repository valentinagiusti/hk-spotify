import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { Table, Container } from "react-bootstrap";
import axios from "axios";

function SearchedArtists() {
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/searched-artists`
      );

      setSearchedList(data.allRequests);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Table className="mt-5" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Searched</th>
            <th>User IP</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {searchedList.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.artist}</td>
              <td>{request.userip}</td>
              <td>{format(parseISO(request.createdAt), "PP")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default SearchedArtists;
