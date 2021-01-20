import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const HelperContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 72%;
  margin: 20px auto 0 auto;
  max-width: 260px;

  span {
    color: #1da0f2;
    font-size: 15px;
    cursor: pointer;
    &:not(:first-of-type):not(:last-child) {
      color: #8899a6;
      cursor: default;
    }
  }
`;

const FormHelper = ({ helper, redirect }) => {
  return (
    <HelperContainer>
      <span>Forgot password?</span>
      <span>&middot;</span>
      <Link href={redirect}>
        <span>{helper}</span>
      </Link>
    </HelperContainer>
  );
};

export default FormHelper;
