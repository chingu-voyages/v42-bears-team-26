/*Designed by Sandra Ashipala https://github.com/sandramsc*/
type Props = {
  sub_menu_1: string
  sub_menu_2: string
  sub_menu_3: string
  sub_menu_4: string
  title: string
}

const Menu = ({
    title,
    sub_menu_1,
    sub_menu_2,
    sub_menu_3,
    sub_menu_4,
}: Props) => {
  return (
    <div className=" h-44 w-40 mt-5 rounded-md border-2 border-gray px-2 py-5 text-center">
      <div className="">
        <p className="font-poppins font-bold">{title}</p>
      </div>

        <ul className="">
        <li>{sub_menu_1}</li>
        <li>{sub_menu_2}</li>
        <li>{sub_menu_3}</li>
        <li>{sub_menu_4}</li>
        </ul>
        </div>
  )
}

export default Menu;
