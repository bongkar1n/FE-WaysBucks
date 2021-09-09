import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import { Container } from "react-bootstrap";
import DetailContent from "../components/DetailContent";

function DetailProduct() {
  const [bucketList, setBucketList] = useState(0);
  const addBucketList = () => {
    setBucketList(bucketList + 1);
  };
  console.log(bucketList);
  return (
    <div>
      <HeaderLogin bucketList={bucketList} />
      <DetailContent addBucketList={addBucketList} />
    </div>
  );
}

export default DetailProduct;
