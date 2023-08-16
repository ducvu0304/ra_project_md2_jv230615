/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";

const CardItem = ({ id, item, handleDelete }) => {
  return (
    <div>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={item.img}
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span>
                <span aria-hidden="true" className="absolute inset-0" />
                {item.name}
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${item.price}</p>
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CardItem;
