import User from '../../models/User';

export default async function POST(req, res) {
    if (req.method === 'POST') {
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }

        try {
            const user = await User.create({ username });
            return res.status(201).json(user);
          } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
              return res.status(409).json({ error: 'Username already exists' });
            }
            console.error('Error saving username:', err);
            return res.status(500).json({ error: 'Failed to save username' });
          }
    }

    res.status(405).json({ error: 'Method not allowed' });
}
