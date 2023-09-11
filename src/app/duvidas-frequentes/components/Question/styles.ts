'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  background: #d9d9d9;
  width: 1226px;
  height: auto;
  margin-bottom: 15px;
  max-width: 100%;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const QuestionTitle = styled.h2`
  color: #000;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-self: flex-start;
`;

export const QuestionAnswer = styled.p`
  color: #000;
  font-size: 0.8em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
