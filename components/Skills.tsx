import { FC } from 'react'

import { useTranslation } from 'next-export-i18n'

import profileData from '../data/skills'
import { Badge } from './ui/badge'

const SkillsAll: FC = () => {
  const { skills } = profileData
  const { t } = useTranslation()
  return (
    <>
      <h2 className='mb-6 text-6xl font-bold font-domain'>
        {t('skills.header')}
      </h2>
      {Object.entries(skills).map(([key, value], index) => {
        return (
          <div key={index} className='mb-4'>
            <div className='mb-2 text-2xl'>
              {value.locales[t('lang')] || value.locales['en']}
            </div>
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
