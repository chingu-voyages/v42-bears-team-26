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
    <div className=" h-44 w-40 mt-5 px-2 py-5 text-center">
      <div className="text-left">
        <p className="font-poppins font-bold">{title}</p>
      </div>

      <ul className="text-left">
        <li>{sub_menu_1}</li>
        <li>{sub_menu_2}</li>
        <li>{sub_menu_3}</li>
        <li>{sub_menu_4}</li>
      </ul>
    </div>
  )
}

export default Menu
