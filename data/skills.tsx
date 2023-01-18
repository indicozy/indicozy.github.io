import { ReactNode } from 'react'

import { PaddingIcon, StitchesLogoIcon } from '@radix-ui/react-icons'
import {
  IconBolt,
  IconBook,
  IconBrandAdobe,
  IconBrandAmazon,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDebian,
  IconBrandDjango,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGatsby,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandOpenSource,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandWix,
  IconBrandWordpress,
  IconBrandYcombinator,
  IconDatabase,
  IconDiamond,
  IconEye,
  IconForms,
  IconLeaf,
  IconLetterA,
  IconLetterB,
  IconLetterD,
  IconLetterG,
  IconLetterH,
  IconLetterI,
  IconLetterJ,
  IconLetterK,
  IconLetterL,
  IconLetterM,
  IconLetterP,
  IconLetterR,
  IconLetterS,
  IconLetterT,
  IconLetterV,
  IconPackages,
  IconPodium,
  IconSearch,
  IconSnowflake,
  IconTerminal2,
  IconTilde,
  IconTruckDelivery,
  IconWebhook,
  TablerIcon
} from '@tabler/icons'

function IconConverter({ icon: Icon }: { icon: TablerIcon }) {
  return <Icon size={16} stroke={1.8} />
}

export interface ProfileSkill {
  value: string
  icon?: JSX.Element
}
type TypeSkillSet = {
  locales: { [key: string]: string }
  icon: ReactNode
  skills: { icon: ReactNode; value: string }[]
}

const profileData: { skills: { [name: string]: TypeSkillSet } } = {
  skills: {
    languages: {
      locales: {
        en: 'Languages',
        ru: 'Языки',
        kz: 'Тілдер'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconBrandJavascript} />,
          value: 'JavaScript'
        },
        {
          icon: <IconConverter icon={IconLetterT} />, // TODO
          value: 'TypeScript'
        },
        {
          icon: <IconConverter icon={IconBrandPython} />,
          value: 'Python'
        },
        {
          icon: <IconConverter icon={IconBrandGoogle} />, // TODO
          value: 'Go'
        },
        {
          icon: <IconConverter icon={IconDiamond} />, // TODO
          value: 'Ruby'
        },
        {
          icon: <IconConverter icon={IconTerminal2} />, // TODO
          value: 'Bash'
        },
        {
          icon: <IconConverter icon={IconTerminal2} />, // TODO
          value: 'Bash'
        }
      ]
    },
    frontend: {
      icon: <PaddingIcon />,
      locales: {
        en: 'Frontend'
      },
      skills: [
        {
          icon: <IconConverter icon={IconBrandReact} />,
          value: 'React'
        },
        {
          icon: <IconConverter icon={IconBrandNextjs} />,
          value: 'NextJS'
        },
        {
          icon: <IconConverter icon={IconBrandGatsby} />,
          value: 'Gatsby'
        },
        {
          icon: <IconConverter icon={IconLetterR} />,
          value: 'Remix'
        },
        {
          icon: <IconConverter icon={IconBrandHtml5} />,
          value: 'HTML5'
        },
        {
          icon: <IconConverter icon={IconBrandCss3} />,
          value: 'CSS3'
        },
        {
          icon: <IconConverter icon={IconBrandRedux} />,
          value: 'Redux'
        },
        {
          icon: <IconConverter icon={IconBrandReact} />, // TODO
          value: 'React Query'
        },
        {
          icon: <IconConverter icon={IconBook} />, // TODO
          value: 'StoryBook'
        },
        {
          icon: <IconConverter icon={IconForms} />, // TODO
          value: 'Formik'
        },
        {
          icon: <IconConverter icon={IconBrandReact} />,
          value: 'react-hook-form'
        },
        {
          icon: <IconConverter icon={IconPackages} />, // TODO
          value: 'WebPack'
        },
        {
          icon: <IconConverter icon={IconLetterV} />, // TODO
          value: 'Vite'
        },
        {
          icon: <IconConverter icon={IconLetterB} />, // TODO
          value: 'Babel'
        }
      ]
    },
    designSystems: {
      icon: <PaddingIcon />,
      locales: {
        en: 'Design Systems',
        ru: 'Дизайн-Системы'
      },
      skills: [
        {
          icon: <IconConverter icon={IconBrandTailwind} />,
          value: 'Tailwind'
        },
        {
          icon: <IconConverter icon={IconLetterM} />,
          value: 'MUI'
        },
        {
          icon: <IconConverter icon={IconLetterM} />,
          value: 'MantineUI'
        },
        {
          icon: <IconConverter icon={IconBolt} />,
          value: 'ChakraUI'
        },
        {
          icon: <IconConverter icon={IconBrandBootstrap} />,
          value: 'Bootstrap'
        },
        {
          icon: <IconConverter icon={IconLetterH} />,
          value: 'HeadlessUI'
        },
        {
          icon: <IconConverter icon={IconLetterR} />,
          value: 'RadixUI'
        },
        {
          icon: <StitchesLogoIcon />,
          value: 'Stitches'
        }
      ]
    },
    backend: {
      locales: {
        en: 'Backend'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconBrandPrisma} />,
          value: 'PrismaORM'
        },
        {
          icon: <IconConverter icon={IconBrandGoogle} />,
          value: 'Fiber'
        },
        {
          icon: <IconConverter icon={IconBrandGoogle} />,
          value: 'Gin'
        },
        {
          icon: <IconConverter icon={IconBrandJavascript} />,
          value: 'NodeJS'
        },
        {
          icon: <IconConverter icon={IconBrandDjango} />,
          value: 'Django'
        },
        {
          icon: <IconConverter icon={IconBrandPython} />,
          value: 'Flask'
        },
        {
          icon: <IconConverter icon={IconBrandJavascript} />,
          value: 'ExpressJS'
        },
        {
          icon: <IconConverter icon={IconDiamond} />, // TODO
          value: 'Rails'
        },
        {
          icon: <IconConverter icon={IconDiamond} />, // TODO
          value: 'Sinatra'
        }
      ]
    },
    databases: {
      locales: {
        en: 'Databases',
        ru: 'Базы данных',
        kz: 'Мәліметтер Базасы'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconLeaf} />, // TODO
          value: 'MongoDB'
        },
        {
          icon: <IconConverter icon={IconDatabase} />, // TODO
          value: 'PostgreSQL'
        },
        {
          icon: <IconConverter icon={IconDatabase} />, // TODO
          value: 'MySQL'
        },
        {
          icon: <IconConverter icon={IconDatabase} />, // TODO
          value: 'MariaDB'
        },
        {
          icon: <IconConverter icon={IconDatabase} />, // TODO
          value: 'SQLite'
        },
        {
          icon: <IconConverter icon={IconDatabase} />, // TODO
          value: 'Redis'
        },
        {
          icon: <IconConverter icon={IconSearch} />, // TODO
          value: 'ElasticSearch'
        },
        {
          icon: <IconConverter icon={IconEye} />, // TODO
          value: 'CassandraDB'
        },
        {
          icon: <IconConverter icon={IconLetterS} />, // TODO
          value: 'ScyllaDB'
        }
      ]
    },
    devops: {
      locales: {
        en: 'DevOps'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconBrandGit} />, // TODO
          value: 'Git'
        },
        {
          icon: <IconConverter icon={IconSnowflake} />, // TODO
          value: 'Nix/NixOS'
        },
        {
          icon: <IconConverter icon={IconBrandGithub} />, // TODO
          value: 'GitHub Actions'
        },
        {
          icon: <IconConverter icon={IconBrandAmazon} />, // TODO
          value: 'AWS'
        },
        {
          icon: <IconConverter icon={IconTruckDelivery} />, // TODO
          value: 'CI/CD'
        },
        {
          icon: <IconConverter icon={IconBrandDocker} />, // TODO
          value: 'Docker'
        },
        {
          icon: <IconConverter icon={IconBrandDocker} />, // TODO
          value: 'Docker Swarm'
        },
        {
          icon: <IconConverter icon={IconBrandDebian} />, // TODO
          value: 'Linux'
        },
        {
          icon: <IconConverter icon={IconLetterT} />, // TODO
          value: 'Terraform'
        },
        {
          icon: <IconConverter icon={IconLetterA} />, // TODO
          value: 'Ansible'
        }
      ]
    },
    testing: {
      locales: {
        en: 'Testing',
        ru: 'Тестирование'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconLetterJ} />, // TODO
          value: 'Jest'
        },
        {
          icon: <IconConverter icon={IconLetterS} />, // TODO
          value: 'SoapUI'
        },
        {
          icon: <IconConverter icon={IconLetterH} />, // TODO
          value: 'Hoppscotch'
        },
        {
          icon: <IconConverter icon={IconLetterS} />, // TODO
          value: 'Selenium'
        }
      ]
    },
    api: {
      locales: {
        en: 'API'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconLetterR} />, // TODO
          value: 'REST'
        },
        {
          icon: <IconConverter icon={IconBrandGraphql} />, // TODO
          value: 'GraphQL'
        },
        {
          icon: <IconConverter icon={IconLetterT} />, // TODO
          value: 'tRPC'
        },
        {
          icon: <IconConverter icon={IconWebhook} />, // TODO
          value: 'Websockets'
        },
        {
          icon: <IconConverter icon={IconWebhook} />, // TODO
          value: 'Sockets.io'
        },
        {
          icon: <IconConverter icon={IconWebhook} />, // TODO
          value: 'LiveBlocks'
        }
      ]
    },
    soft: {
      locales: {
        en: 'Soft skills',
        ru: 'Софт скиллы'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconLetterJ} />, // TODO
          value: 'Jira'
        },
        {
          icon: <IconConverter icon={IconPodium} />, // TODO
          value: 'Public Speaking'
        },
        {
          icon: <IconConverter icon={IconBrandOpenSource} />, // TODO
          value: 'FOSS Dev'
        },
        {
          icon: <IconConverter icon={IconLetterA} />, // TODO
          value: 'Agile'
        },
        {
          icon: <IconConverter icon={IconBrandYcombinator} />, // TODO
          value: 'Startups'
        }
      ]
    },
    design: {
      locales: {
        en: 'Design',
        ru: 'Дизайны'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconBrandAdobe} />, // TODO
          value: 'Adobe Pack'
        },
        {
          icon: <IconConverter icon={IconLetterL} />, // TODO
          value: 'Lunacy'
        },
        {
          icon: <IconConverter icon={IconLetterD} />, // TODO
          value: 'Design Systems'
        },
        {
          icon: <IconConverter icon={IconLetterI} />, // TODO
          value: 'Inkscape'
        },
        {
          icon: <IconConverter icon={IconBrandFigma} />, // TODO
          value: 'Figma'
        }
      ]
    },
    editing: {
      locales: {
        en: 'Editing',
        ru: 'Монтаж'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconBrandAdobe} />, // TODO
          value: 'Adobe Pack'
        },
        {
          icon: <IconConverter icon={IconLetterG} />, // TODO
          value: 'Gimp'
        },
        {
          icon: <IconConverter icon={IconLetterK} />, // TODO
          value: 'Kdenlive'
        },
        {
          icon: <IconConverter icon={IconLetterA} />, // TODO
          value: 'Audacity'
        }
      ]
    },
    CMS: {
      locales: {
        en: 'CMS',
        ru: 'Другие'
      },
      icon: <PaddingIcon />,
      skills: [
        {
          icon: <IconConverter icon={IconLetterD} />, // TODO
          value: 'DatoCMS'
        },
        {
          icon: <IconConverter icon={IconLetterP} />, // TODO
          value: 'PocketBase'
        },
        {
          icon: <IconConverter icon={IconBrandWordpress} />, // TODO
          value: 'WordPress'
        },
        {
          icon: <IconConverter icon={IconBrandWordpress} />, // TODO
          value: 'WebFlow'
        },
        {
          icon: <IconConverter icon={IconBrandWix} />, // TODO
          value: 'Wix'
        },
        {
          icon: <IconConverter icon={IconTilde} />, // TODO
          value: 'Tilda'
        }
      ]
    }
  }
}
export default profileData
