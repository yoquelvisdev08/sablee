export interface TeamMember {
  id: string
  photo: string
  /** Rotacion visual en grados (estilo polaroid / collage) */
  rotate: number
}

/**
 * Integrantes del equipo. Cada miembro usa su ficha en public/images/integrantes/.
 * Claves i18n: team.members.{id}.name | role | desc | image-alt
 */
export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'camila', photo: '/images/integrantes/camila.jpg', rotate: -2.5 },
  { id: 'adelin', photo: '/images/integrantes/adelin.jpg', rotate: 2 },
  { id: 'eidan', photo: '/images/integrantes/eidan.jpg', rotate: -1.5 },
  { id: 'gabriel', photo: '/images/integrantes/gabriel.jpg', rotate: 2.5 },
  { id: 'jared', photo: '/images/integrantes/jared.jpg', rotate: -2 },
  { id: 'yule', photo: '/images/integrantes/yule.jpg', rotate: 1.5 },
]
