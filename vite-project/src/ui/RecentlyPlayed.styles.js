import styled from "styled-components";

export const RecentlyPlayedText = styled.div`
  /* Recently played */

  width: 170px;
  height: 30px;
  margin-left: 15px;
  top: 278px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 28px;
  /* or 147% */
  color: #ffffff;
`;

export const RecentlyPlayedGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 10px;
  width: 50%;
`;

export const RecentlyPlayedCard = styled.div`
  /* Screen Shot 2021-12-08 at 13.39 2 */

  // width: 105px;
  // height: 105px;
  // left: 7px;
  // top: 6px;

  background-size: cover;
`;
