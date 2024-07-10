// 1번 유저의 게시글 목록과 댓글을 리턴하는 getPosts 함수를 작성하시오.
//  - 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1
//  - 댓글 목록: https://jsonplaceholder.typicode.com/posts/<postId>/comments

const URL = "https://jsonplaceholder.typicode.com/posts";
const getPosts = async (id) => {
  const ret = [];
  const posts = await fetch(`${URL}?userId=${id}`).then((res) => res.json());
  for (let p of posts) {
    const comments = await fetch(`${URL}/${p.id}/comments`).then((res) =>
      res.json()
    );
    ret.push({ postId: p.id, title: p.title, comments });
  }
  console.log(ret);
};

// TEST
getPosts(1);
