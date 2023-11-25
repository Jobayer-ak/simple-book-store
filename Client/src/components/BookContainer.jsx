import AddBookForm from "./AddBookForm";
import CardList from "./CardList";

function BookContainer() {
  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="filter-btn active-filter" id="lws-filterAll">All</button>
            <button className="filter-btn" id="lws-filterFeatured">Featured</button>
          </div>
        </div>
        <div className="">
          {/* Book Card */}
          <CardList/>
        </div>
      </div>
          {/* Add Book Form */}
          <AddBookForm/>
    </div>
  );
}

export default BookContainer;
