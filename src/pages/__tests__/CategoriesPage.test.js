import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import CategoriesPage from "../CategoriesPage";
import { DataContext } from "../../context/DataContext";

jest.mock('../../components/Admin/LayoutComponent', () => ({
    __esModule: true,
    default: ({ children }) => <div>{children}</div>
}))

describe("Render CategoriesPage", () => {
    test("should call add category with category input", async ()=> {
        const categories= [];
        const addCategory = jest.fn();
        const fetchCategories = jest.fn();
        render(
            <Router>
                <DataContext.Provider value={{ categories, addCategory, fetchCategories }}>
                    <CategoriesPage/>
                </DataContext.Provider>
            </Router>
        );

        const categoryInput = screen.getByTestId("input-category");
        await userEvent.type(categoryInput, "kategori 1");

        const submitButton= screen.getByTestId("button-submit");
        userEvent.click(submitButton);
        
        await waitFor(() =>{
            expect(addCategory).toHaveBeenCalledWith({
                name: "kategori 1",
            });
        }); 
    })
})