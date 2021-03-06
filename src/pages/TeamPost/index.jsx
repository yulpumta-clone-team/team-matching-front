import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from 'pages/Loader';
import MarkdownViewer from 'components/MdViewer';
import CommentContainer from 'components/CommentContainer';
import { getTeamDetail } from '_actions/team_action';
import { handleComment } from 'utils/handleComment';
import { TEAM } from 'utils/constant';
import { Board, Button, Box, Box2, Box3 } from './stylep';

function TeamPost() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {},
  });
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const dispatchComment = handleComment(TEAM, dispatch);
  const navigate = useNavigate();
  const onClickback = () => {
    navigate(-1);
  };
  const { myData } = useSelector((state) => state.auth);
  const { targetTeam } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getTeamDetail(Number(teamId)));
  }, [dispatch, teamId]);
  const onSubmit = async ({ commentValue }) => {
    if (!myData) {
      alert('로그인을 먼저해주세요');
    } else {
      const newCommentData = {
        content: commentValue,
        writter_id: myData.user_id,
        team_id,
        nickname: myData.nickname,
        isSecret: false,
      };
      dispatchComment.postComment(newCommentData);
      setValue('commentValue', '');
    }
    // setError('extraError', { message: 'Server offLine.' });
  };
  if (!targetTeam) {
    return <Loader />;
  }
  const {
    team_id,
    team_name,
    name,
    content,
    session,
    img,
    read,
    job,
    comment_cnt,
    like_cnt,
    createdAt,
    updatedAt,
    comments,
  } = targetTeam;
  return (
    <div>
      <button onClick={onClickback}>back</button>
      <Board>
        <Box3>{img}</Box3>
        <Box2>
          <MarkdownViewer mdValue={content} />
        </Box2>
        <Box2>
          이름 : {name} / 팀명 : {team_name}
        </Box2>
        <Box2>좋아요 개수 : {like_cnt}</Box2>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('commentValue', {
              required: '내용을 입력해주세요.',
            })}
            placeholder="댓글을 입력하세요."
          />
          <span>{errors?.commentValue?.message}</span>
          <span>{errors?.extraError?.message}</span>
          <button type="submit">작성</button>
        </form>
        <CommentContainer postId={team_id} comments={comments} dispatchComment={dispatchComment} />
      </Board>
      <Link to="./edit" state={{ team_name, content, name, img, like_cnt }}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}

export default TeamPost;
