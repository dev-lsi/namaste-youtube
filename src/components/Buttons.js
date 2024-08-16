import Button from "./Button";

const Buttons=()=>{
    return (
        <div className="flex flex-nowrap justify-items-start gap-4 p-2">
          <Button name="All"/>
          <Button name="Watched"/>
          <Button name="Sports"/>
          <Button name="Music"/>
          <Button name="History"/>
        </div>
    );
};

export default Buttons;