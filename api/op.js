export default function handler(req, res) {
  // Твой Lua код
  const luaScript = `print("Synity connection test: SUCCESS")`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешаем доступ отовсюду
  return res.status(200).send(luaScript);
}
