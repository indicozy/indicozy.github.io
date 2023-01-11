import { FC } from 'react'

import { useTranslation } from 'next-export-i18n'

import profileData from '../data/skills'
import { Badge } from './ui/badge'

const SkillsAll: FC = () => {
  const { skills } = profileData
  const { t } = useTranslation()
  return (
    <>
      {Object.entries(skills).map(([key, value], index) => {
        return (
          <div key={index}>
            <div>{value.locales[t('lang')] || value.locales['en']}</div>
            <div>
              {value.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} icon={skill.icon}>
                  {skill.value}
                </Badge>
              ))}
            </div>
            {/* {JSON.stringify(value)} */}
          </div>
        )
      })}
    </>
  )
}
export default SkillsAll
