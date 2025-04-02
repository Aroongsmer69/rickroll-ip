export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const info = {
    ip: ip,
    userAgent: req.headers['user-agent'],
    language: req.headers['accept-language'],
    timestamp: new Date().toISOString()
  };
  res.status(200).json(info);
}
