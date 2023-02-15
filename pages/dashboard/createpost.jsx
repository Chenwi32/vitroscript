import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const CreatePost = () => {
  const [postAuthor, setPostAuthor] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postHeadline, setPostHeadline] = useState("");
  const [postBody, setPostBody] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const timestanp = Date.now().toString();

    const post = doc(db, `blogposts/${timestanp}`);

    const postdata = {
      postAuthor,
      postTitle,
      postHeadline,
      postBody,
    };

    if (
      postTitle !== "" &&
      postHeadline !== "" &&
      postBody !== "" &&
      postAuthor !== ""
    ) {
      try {
        await setDoc(post, postdata);
      } catch (error) {
        console.log(error);
      }

      setPostAuthor("");
      setPostBody("");
      setPostBody("");
      setPostTitle("");
    } else {
      alert("You forgot some fields");
    }
  };

  return (
    <>
      <Head>
        <title>Create blog posts</title>
      </Head>

      <Container
        minH={"70vh"}
        mb={10}
        p={10}
        color={"brand.300"}
        fontWeight={"bold"}
        maxW={1200}
      >
        <Container>
          <Heading fontFamily={"Andika"} mb={5}>
          Create a blog post
        </Heading>

        <VStack mb={5} align={"left"}>
          <Text>Your Name</Text>
          <Input
            type="text"
            value={postAuthor}
            onChange={(e) => {
              setPostAuthor(e.target.value);
            }}
          />
        </VStack>

        <VStack mb={5} align={"left"}>
          <Text>Post Title</Text>
          <Input
            type="text"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </VStack>

        <VStack mb={5} align={"left"}>
          <Text>Post Headline</Text>
          <Input
            type="text"
            value={postHeadline}
            onChange={(e) => {
              setPostHeadline(e.target.value);
            }}
          />
        </VStack>

        <VStack mb={5} align={"left"}>
          <Text>Post Body</Text>
          <Textarea
            value={postBody}
            name=""
            id="message"
            cols="25"
            rows="5"
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
        </VStack>

        <HStack p={3} w={"100%"} justifyContent={"flex-end"} mt={10}>
          <Button
            bg={"brand.100"}
            color={"brand.300"}
            _hover={{
              bg: "brand.200",
              
            }}
            onClick={(e) => handlePost(e)}
          >
            Create Post
          </Button>
        </HStack>
        </Container>
        
      </Container>
    </>
  );
};

export default CreatePost;
