import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GaneCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="250px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GaneCardSkeleton;
