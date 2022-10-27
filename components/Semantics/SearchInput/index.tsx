import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { getQueryValue } from "../../../services/utils";

const Container = styled.div`
  text-align: center;
  padding: 0.25rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 70%;
`;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (searchTerm !== router.query.q) {
      setSearchTerm(getQueryValue(router.query.q));
    }
  }, [router.query.q, searchTerm]);

  const onChangeInput = (updatedSearchTerm: string) => {
    setSearchTerm(updatedSearchTerm);
    router.query.q = updatedSearchTerm;
    router.push(
      {
        pathname: "/",
        query: { ...router.query },
      },
      undefined,
      {}
    );
  };

  return (
    <Container>
      <Input
        placeholder="Searchbar"
        onChange={(event) => onChangeInput(event.target.value)}
        value={searchTerm}
        maxLength={50}
      />
    </Container>
  );
};

export default SearchInput;
