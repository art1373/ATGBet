import React from "react";
import { Text } from "react-native";
import { Container } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../Stores/gameData/selectors";
import { fetchProductsByGameType } from "../../Stores/gameData/actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  console.log({ products });
  React.useEffect(() => {
    dispatch(fetchProductsByGameType("V75"));
  }, []);
  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
};

export default Home;
