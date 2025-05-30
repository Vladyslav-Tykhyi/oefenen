const Artikel_1 = ({ like: { heading }, handleLike }) => {
  return (
    <div>
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eius
        amet porro, vel officiis at possimus autem neque nam doloremque odit
        voluptas fugit dicta perspiciatis omnis quaerat itaque illo dignissimos?
      </p>
      <button
        onClick={() => {
          handleLike("heading");
        }}
      >
        Add like : {heading}
      </button>
    </div>
  );
};

export default Artikel_1;
