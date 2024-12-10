import express from 'express';
import players from '../models/player.models.js';

const router = express();
// 모든 선수 조회
router.get('/api/players', (req, res, next) => {
    res.json(players);
});

// 특정 선수 조회
router.get('/api/players/:id', (req, res, next) => {
    const playerId = parseInt(req.params.id);
    const player = players.find(p => p.id === playerId);
    
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ error: "해당 선수를 찾을 수 없습니다." });
    }
});

// 선수 추가
router.post('/api/players', (req, res, next) => {
    const newPlayer = {
        id: players.length + 1, // 새로운 ID 생성
        ...req.body // 요청 본문에서 선수 정보 가져오기
    };
    players.push(newPlayer); // 선수 목록에 추가
    res.status(201).json(newPlayer); // 추가된 선수 정보 반환
});

// 특정 선수 수정
router.put('/api/players/:id', (req, res, next) => {
    const playerId = parseInt(req.params.id);
    const playerIndex = players.findIndex(p => p.id === playerId);
    
    if (playerIndex !== -1) {
        const updatedPlayer = {
            id: playerId,
            ...req.body // 요청 본문에서 선수 정보 가져오기
        };
        players[playerIndex] = updatedPlayer; // 선수 정보 수정
        res.json(updatedPlayer); // 수정된 선수 정보 반환
    } else {
        res.status(404).json({ error: "해당 선수를 찾을 수 없습니다." });
    }
});

// 특정 선수 삭제
router.delete('/api/players/:id', (req, res, next) => {
    const playerId = parseInt(req.params.id);
    const playerIndex = players.findIndex(p => p.id === playerId);
    
    if (playerIndex !== -1) {
        players.splice(playerIndex, 1); // 선수 삭제
        res.json({ message: "해당 선수가 삭제되었습니다.", id: playerId }); // 삭제된 선수 ID 반환
    } else {
        res.status(404).json({ error: "해당 선수를 찾을 수 없습니다." });
    }
});

export default router;