export interface TeamMemberStats {
  aero: number
  structural: number
}

export interface TeamMember {
  id: string
  photo: string
  badge: string
  stats: TeamMemberStats
}

/**
 * Agrega integrantes aqui. Cada miembro necesita claves en translations:
 * team.members.{id}.name | role | desc | quote
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'camila',
    photo: '/images/camila.jpg',
    badge: '94-Alpha',
    stats: { aero: 98.4, structural: 102 },
  },
  {
    id: 'mateo',
    photo: '/images/team-sables.jpg',
    badge: '02-Bravo',
    stats: { aero: 97.1, structural: 100 },
  },
]
