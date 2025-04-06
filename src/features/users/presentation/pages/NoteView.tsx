import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { NoteViewModel } from "../viewmodels/NoteViewModel";

type Props = {
  viewModel: NoteViewModel;
};

export const NoteView = observer(({ viewModel }: Props) => {
  //const viewModel = new NoteViewModel();
  const navigate = useNavigate();

  useEffect(() => {
    if (viewModel.isValid) {
      navigate("/dashboard"); 
    }
  }, [viewModel.isValid, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">Formulario</h2>
        {viewModel.error && <p className="text-red-500 text-center mt-2">{viewModel.error}</p>}
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Title</label>
            <input
              type="text"
              value={viewModel.title}
              onChange={(e) => viewModel.onChangeTitle(e.target.value)}
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Body</label>
            <input
              type="text"
              value={viewModel.body}
              onChange={(e) => viewModel.onChangeBody(e.target.value)}
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">UserID</label>
            <input
              type="number"
              value={viewModel.userId}
              onChange={(e) => viewModel.onChangeUserId(e.target.value)}
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            onClick={()=>viewModel.doCreateNote()}
          >
            Crear Nota
          </button>
        </form>
      </div>
    </div>
  );
});

export default NoteView;