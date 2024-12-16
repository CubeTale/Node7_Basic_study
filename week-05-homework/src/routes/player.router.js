import express from 'express';
import prisma from '../controllers/controller.js';

const router = express();
// 모든 선수 조회
router.get('/api/players', async (req, res, next) => {
  const player = await prisma.players.findMany();
  res.json({ data: player });
});

// 특정 선수 조회
router.get('/api/players/:id', async (req, res, next) => {
  const { id } = req.params;

  const player = await prisma.players.findFirst({
    where: {
      id: +id,
    },
  });
  if (!player) {
    return res.status(401).json({ Message: '해당 선수가 존재하지 않습니다.' });
  }
  return res.status(200).json({ data: player });
});

// 선수 추가
router.post('/api/players', async (req, res, next) => {
  const { name, speed, shouting, grade } = req.body;

  if (!name) {
    return res.status(401).json({ Message: '선수 이름이 없습니다.' });
  }
  if (!speed || !shouting) {
    return res.status(401).json({ Message: '선수 능력치가 없습니다.' });
  }
  if (!grade) {
    return res.status(401).json({ Message: '선수 등급이 없습니다.' });
  }

  const player = await prisma.players.create({
    data: {
      name: name,
      speed: speed,
      shouting: shouting,
      grade: grade,
    },
  });
  return res.status(201).json({ data: player });
});

// 특정 선수 수정
router.put('/api/players/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, speed, shouting, grade } = req.body;

  const playerId = await prisma.players.findUnique({
    where: { id: +id },
  });

  if (!playerId) {
    return res.status(404).json({ Message: '해당 선수가 존재하지 않습니다.' });
  }
  await prisma.players.update({
    data: {
      name: name,
      speed: speed,
      shouting: shouting,
      grade: grade,
    },
    where: {
      id: +id,
    },
  });
  return res.status(200).json({ data: '해당 선수정보가 수정되었습니다.' });
});

// 특정 선수 삭제
router.delete('/api/players/:id', async (req, res, next) => {
  const { id } = req.params;

  const notPlayer = prisma.players.findUnique({
    where: {
      id: +id,
    },
  });
  if (!notPlayer) {
    return res.status(404).json({ Message: '해당 선수가 존재하지 않습니다.' });
  }

  await prisma.players.delete({
    where: {
      id: +id,
    },
  });
  return res.status(200).json({ Message: '해당 선수가 성공적으로 삭제되었습니다.' });
});

export default router;
