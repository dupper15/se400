import { expect, test } from '@playwright/test';

test("Create a new user and delete it", async ({ request }) => {
    const newUser = {
        email: "john.doe@gmail.com",
        password: "password123",
        confirmPassword: "password123",
    };

    const response = await request.post("http://localhost:3000/users/register", {
        data: newUser
    });
    console.log("Response status:", response.status());
    expect(response.status()).toBe(201);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("_id"); 
    
    const userId = responseBody._id;
    
    if (!userId) {
        throw new Error("User ID is missing, cannot proceed with deletion.");
    }

    const deleteResponse = await request.delete(`http://localhost:3000/users/${userId}`);
    expect(deleteResponse.status()).toBe(200);
});
