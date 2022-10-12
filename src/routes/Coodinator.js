export const goHome = (navigate) => {
  navigate('/');
};

export const goPostDetailPage = (navigate, id) => {
  navigate(`/postDetail/${id}`);
};
