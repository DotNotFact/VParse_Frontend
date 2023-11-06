export interface IFilterProps {
  age_from: string;
  age_to: string;
  sex: string;
  sort: string;
  status: string;
  has_photo: string;
  online: string;
  can_write_private_message: string;
  can_send_friend_request: string;
  can_see_all_posts: string;
  is_friend: string;
  common_count: string;
}

export interface ISidebarRightProps {
  handleSidebarRight: any;
  isRight: boolean;
}

export interface ISidebarLeftProps {
  handleSidebarLeft: any;
  isLeft: boolean;
}

export interface ISidebarLeftData {
  title: string;
  url: string;
  href: string;
  text: string;
  handler: () => void;
}
