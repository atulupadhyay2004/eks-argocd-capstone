const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    version: process.env.APP_VERSION || '1.0.0',
    build: process.env.BUILD_NUMBER || 'local',
    uptime: process.uptime(),
    uptime_human: formatUptime(process.uptime()),
    memory: {
      used: Math.round(
        process.memoryUsage().heapUsed / 1024 / 1024
      ) + 'MB',
      total: Math.round(
        process.memoryUsage().heapTotal / 1024 / 1024
      ) + 'MB'
    },
    system: {
      hostname: os.hostname(),
      platform: os.platform(),
      cpus: os.cpus().length
    },
    timestamp: new Date().toISOString()
  });
});

function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

module.exports = router;
