import GtcAiConference from '../routes/gtc-ai-conference';

import {
  gtc_ai_conference_03_22,
  drive_hyperion_22,
  ces_22,
  autonomous_driving,
  clara_holoscan_21,
  gtc_ai_conference_11_21,
  insights,
  quantum_computing,
  time_to_tell_quatum,
  time_to_tell_secrets,
  advanced_threat_research,
  insights_dashboard,
  siliconless,
  yes_sko,
  bathtubs_snakes_and_wannacry_oh_my,
  insights_to_empower_you,
  unified_cloud_edge,
  mcafee_brand_b2c,
  covid_19_threats_dashboard,
  it_s_about_time,
  mfe_light_design_system,
  mfe_architecture,
  mpower_digital,
  our_journey_together,
  xdr_campaign,
  here_s_an_idea,
  everyday_heroes,
  d2c2_campaign,
  working_from_home,
  mpower_19,
  cybercast,
  pabellon_de_ecuador,
  the_website_development_process,
  ai_and_robotics,
} from '../images';
/*

TODO: add to the SideNavData:
  - image
  - tile title (ID) -> I can use the same id and plug i18n

*/
export interface SideNavData {
  id: string;
  sort: number;
  route: string;
  element: React.ReactNode;
  image?: string;
}

const _sidenavData: SideNavData[] = [
  {
    sort: 0,
    id: 'gtc_ai_conference_03_22',
    route: 'gtc_ai_conference_03_22',
    element: <GtcAiConference />,
    image: gtc_ai_conference_03_22,
  },
  {
    sort: 1,
    id: 'ces_22',
    route: 'ces_22',
    element: <GtcAiConference />,
    image: ces_22,
  },
  {
    sort: 2,
    id: 'autonomous_driving',
    route: 'autonomous_driving',
    element: <GtcAiConference />,
    image: autonomous_driving,
  },
  {
    sort: 3,
    id: 'gtc_ai_conference_11_21',
    route: 'gtc_ai_conference_11_21',
    element: <GtcAiConference />,
    image: gtc_ai_conference_11_21,
  },
  {
    sort: 4,
    id: 'clara_holoscan_21',
    route: 'clara_holoscan_21',
    element: <GtcAiConference />,
    image: clara_holoscan_21,
  },
  {
    sort: 5,
    id: 'drive_hyperion_22',
    route: 'drive_hyperion_22',
    element: <GtcAiConference />,
    image: drive_hyperion_22,
  },
  {
    sort: 6,
    id: 'ai_and_robotics',
    route: 'ai_and_robotics',
    element: <GtcAiConference />,
    image: ai_and_robotics,
  },
  {
    sort: 7,
    id: 'insights',
    route: 'insights',
    element: <GtcAiConference />,
    image: insights,
  },
  {
    sort: 8,
    id: 'quantum_computing',
    route: 'quantum_computing',
    element: <GtcAiConference />,
    image: quantum_computing,
  },
  {
    sort: 9,
    id: 'advanced_threat_research',
    route: 'advanced_threat_research',
    element: <GtcAiConference />,
    image: advanced_threat_research,
  },
  {
    sort: 10,
    id: 'time_to_tell_quatum',
    route: 'time_to_tell_quatum',
    element: <GtcAiConference />,
    image: time_to_tell_quatum,
  },
  {
    sort: 11,
    id: 'time_to_tell_secrets',
    route: 'time_to_tell_secrets',
    element: <GtcAiConference />,
    image: time_to_tell_secrets,
  },
  {
    sort: 12,
    id: 'insights_dashboard',
    route: 'insights_dashboard',
    element: <GtcAiConference />,
    image: insights_dashboard,
  },
  {
    sort: 13,
    id: 'bathtubs_snakes_and_wannacry_oh_my',
    route: 'bathtubs_snakes_and_wannacry_oh_my',
    element: <GtcAiConference />,
    image: bathtubs_snakes_and_wannacry_oh_my,
  },
  {
    sort: 14,
    id: 'siliconless',
    route: 'siliconless',
    element: <GtcAiConference />,
    image: siliconless,
  },
  {
    sort: 15,
    id: 'insights_to_empower_you',
    route: 'insights_to_empower_you',
    element: <GtcAiConference />,
    image: insights_to_empower_you,
  },
  {
    sort: 16,
    id: 'yes_sko',
    route: 'yes_sko',
    element: <GtcAiConference />,
    image: yes_sko,
  },
  {
    sort: 17,
    id: 'unified_cloud_edge',
    route: 'unified_cloud_edge',
    element: <GtcAiConference />,
    image: unified_cloud_edge,
  },
  {
    sort: 18,
    id: 'mcafee_brand_b2c',
    route: 'mcafee_brand_b2c',
    element: <GtcAiConference />,
    image: mcafee_brand_b2c,
  },
  {
    sort: 19,
    id: 'covid_19_threats_dashboard',
    route: 'covid_19_threats_dashboard',
    element: <GtcAiConference />,
    image: covid_19_threats_dashboard,
  },
  {
    sort: 20,
    id: 'it_s_about_time',
    route: 'it_s_about_time',
    element: <GtcAiConference />,
    image: it_s_about_time,
  },
  {
    sort: 21,
    id: 'mfe_light_design_system',
    route: 'mfe_light_design_system',
    element: <GtcAiConference />,
    image: mfe_light_design_system,
  },
  {
    sort: 22,
    id: 'mpower_digital',
    route: 'mpower_digital',
    element: <GtcAiConference />,
    image: mpower_digital,
  },
  {
    sort: 23,
    id: 'our_journey_together',
    route: 'our_journey_together',
    element: <GtcAiConference />,
    image: our_journey_together,
  },
  {
    sort: 24,
    id: 'here_s_an_idea',
    route: 'here_s_an_idea',
    element: <GtcAiConference />,
    image: here_s_an_idea,
  },
  {
    sort: 25,
    id: 'xdr_campaign',
    route: 'xdr_campaign',
    element: <GtcAiConference />,
    image: xdr_campaign,
  },
  {
    sort: 26,
    id: 'mfe_architecture',
    route: 'mfe_architecture',
    element: <GtcAiConference />,
    image: mfe_architecture,
  },
  {
    sort: 27,
    id: 'everyday_heroes',
    route: 'everyday_heroes',
    element: <GtcAiConference />,
    image: everyday_heroes,
  },
  {
    sort: 28,
    id: 'd2c2_campaign',
    route: 'd2c2_campaign',
    element: <GtcAiConference />,
    image: d2c2_campaign,
  },
  {
    sort: 29,
    id: 'mpower_19',
    route: 'mpower_19',
    element: <GtcAiConference />,
    image: mpower_19,
  },
  {
    sort: 30,
    id: 'working_from_home',
    route: 'working_from_home',
    element: <GtcAiConference />,
    image: working_from_home,
  },
  {
    sort: 31,
    id: 'pabellon_de_ecuador',
    route: 'pabellon_de_ecuador',
    element: <GtcAiConference />,
    image: pabellon_de_ecuador,
  },
  {
    sort: 32,
    id: 'cybercast',
    route: 'cybercast',
    element: <GtcAiConference />,
    image: cybercast,
  },
  {
    sort: 33,
    id: 'the_website_development_process',
    route: 'the_website_development_process',
    element: <GtcAiConference />,
    image: the_website_development_process,
  },
];

export const sidenavData = _sidenavData.sort(
  (a: SideNavData, b: SideNavData) => a.sort - b.sort
);
